import type { Album, LastfmTrack } from "@types/api";

const NOTCMS_API_ROOT = "http://localhost:8000/api";

class NotAPI {
  private readonly baseUrl: string;

  constructor(baseUrl: string = NOTCMS_API_ROOT) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(path: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, options);

    if (!response.ok) {
      const errorDetails = await response.json().catch(() => null);
      throw new Error(
        `API request failed with status ${response.status}: ${
          errorDetails?.message || response.statusText
        }`,
      );
    }

    return response.json();
  }

  async getLastPlayed(): Promise<LastfmTrack> {
    return this.request<LastfmTrack>("/music/last-played");
  }

  async getMusicAlbum(slug: string): Promise<Album> {
    return this.request<Album>(`/music/album/${slug}`);
  }
}

export const api = new NotAPI();
