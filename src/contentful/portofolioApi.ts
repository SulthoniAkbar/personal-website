import contentfulClient from "@/contentful/contentfulClient";
import {
  TypePortofolioSectionSkeleton,
  IContentfulAsset,
} from "@/contentful/types/personalBlog.types";
import type { Document as RichTextDocument } from "@contentful/rich-text-types";

export type PortofolioItem = {
  id: string;
  title: string;
  slug: string | null;
  imageUrl: string;
  description: string;
  shortDesc: string | null;
  projectLink: string | null;
  linkGithub: string | null;
  technology: string[];
  galleryUrls: string[];
  fitur: RichTextDocument | null;
};

function getImageUrl(image: unknown): string {
  if (!image || typeof image !== "object") return "";
  const asset = image as IContentfulAsset;
  const url = asset?.fields?.file?.url;
  if (!url) return "";
  return url.startsWith("//") ? `https:${url}` : url;
}

function getGalleryUrls(gallery: unknown): string[] {
  if (!Array.isArray(gallery)) return [];
  return gallery.map((item) => getImageUrl(item)).filter(Boolean);
}

export async function getPortofolioList(): Promise<PortofolioItem[]> {
  try {
    const data = await contentfulClient.getEntries<TypePortofolioSectionSkeleton>(
      {
        content_type: "portofolioSection",
        order: ["-sys.createdAt"],
        include: 2,
      }
    );
    return (data?.items ?? []).map((item) => {
      const fields = item.fields as Record<string, unknown>;
      return {
        id: item.sys.id,
        title: (fields.title as string) ?? "No Title",
        slug: (fields.slug as string) ?? null,
        imageUrl: getImageUrl(fields.image),
        description: (fields.description as string) ?? "",
        shortDesc: (fields.shortDesc as string) ?? null,
        projectLink: (fields.projectLink as string) ?? null,
        linkGithub: (fields.linkGithub as string) ?? null,
        technology: (fields.technology as string[]) ?? [],
        galleryUrls: getGalleryUrls(fields.gallery),
        fitur: (fields.fitur as RichTextDocument | undefined) ?? null,
      };
    });
  } catch (err) {
    console.error("getPortofolioList:", err);
    return [];
  }
}

export async function getPortofolioBySlug(
  slug: string
): Promise<PortofolioItem | null> {
  try {
    const data = await contentfulClient.getEntries<TypePortofolioSectionSkeleton>(
      {
        content_type: "portofolioSection",
        "fields.slug": slug,
        limit: 1,
        include: 2,
      }
    );
    const item = data?.items?.[0];
    if (!item) return null;
    const fields = item.fields as Record<string, unknown>;
    return {
      id: item.sys.id,
      title: (fields.title as string) ?? "No Title",
      slug: (fields.slug as string) ?? null,
      imageUrl: getImageUrl(fields.image),
      description: (fields.description as string) ?? "",
      shortDesc: (fields.shortDesc as string) ?? null,
      projectLink: (fields.projectLink as string) ?? null,
      linkGithub: (fields.linkGithub as string) ?? null,
      technology: (fields.technology as string[]) ?? [],
      galleryUrls: getGalleryUrls(fields.gallery),
      fitur: (fields.fitur as RichTextDocument | undefined) ?? null,
    };
  } catch (err) {
    console.error("getPortofolioBySlug:", err);
    return null;
  }
}

export async function getAllPortofolioSlugs(): Promise<string[]> {
  const list = await getPortofolioList();
  return list.map((p) => p.slug).filter((s): s is string => !!s);
}
