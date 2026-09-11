import { useEffect, useState } from "react";
import { FALLBACK_PROJECTS, LANGUAGE_HINTS, PROFILE } from "./data";

export interface Repo {
  name: string;
  title: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  homepage?: string | null;
  updated: string;
  tags: string[];
}

export interface GithubProfile {
  publicRepos: number;
  followers: number;
  hireable: boolean;
}

interface GithubState {
  repos: Repo[];
  profile: GithubProfile;
  live: boolean;
  loading: boolean;
}

const FALLBACK: GithubState = {
  repos: FALLBACK_PROJECTS,
  profile: { publicRepos: 16, followers: 11, hireable: true },
  live: false,
  loading: true,
};

function prettify(name: string): string {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .trim()
    .replace(/\b\w/g, (ch) => ch.toUpperCase());
}

export function useGithub(): GithubState {
  const [state, setState] = useState<GithubState>(FALLBACK);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/ENiGMA-101"),
          fetch("https://api.github.com/users/ENiGMA-101/repos?sort=pushed&per_page=100"),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error("github api limit");
        const user = await userRes.json();
        const reposRaw: any[] = await reposRes.json();
        if (cancelled) return;

        const repos: Repo[] = reposRaw
          .filter((r) => !r.fork && r.name !== "ENiGMA-101")
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          )
          .slice(0, 6)
          .map((r) => {
            const known = FALLBACK_PROJECTS.find((f) => f.name === r.name);
            return {
              name: r.name,
              title: known?.title ?? prettify(r.name),
              description:
                r.description ??
                known?.description ??
                "A project from the ENiGMA-101 workshop — open the repo to explore.",
              language: r.language ?? known?.language ?? "Code",
              stars: r.stargazers_count,
              forks: r.forks_count,
              url: r.html_url,
              homepage: r.homepage || known?.homepage || null,
              updated: r.pushed_at,
              tags:
                known?.tags ??
                [r.language, ...(LANGUAGE_HINTS[r.language] ?? [])].filter(Boolean).slice(0, 3),
            };
          });

        setState({
          repos: repos.length ? repos : FALLBACK_PROJECTS,
          profile: {
            publicRepos: user.public_repos ?? 16,
            followers: user.followers ?? 11,
            hireable: user.hireable ?? true,
          },
          live: true,
          loading: false,
        });
      } catch {
        if (!cancelled) setState({ ...FALLBACK, loading: false });
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}

export function formatUpdated(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export { PROFILE };
