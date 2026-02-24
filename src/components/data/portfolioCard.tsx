"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface CardProps {
  imageUrl: string;
  title: string;
  slug?: string | null;
  projectLink?: string;
  linkGithub?: string;
  description: string;
  shortDesc?: string | null;
  technology?: string[];
}

const MAX_PREVIEW_CHARS = 140;

export default function PortfolioCard({
  imageUrl,
  title,
  slug,
  projectLink,
  linkGithub,
  description,
  shortDesc,
  technology = [],
}: CardProps) {
  const detailHref = slug ? `/portofolio/${encodeURIComponent(slug)}` : null;
  const fullText = (shortDesc ?? description)?.trim() || "—";
  const isLong = fullText.length > MAX_PREVIEW_CHARS;
  const [expanded, setExpanded] = useState(false);

  const shownText =
    expanded || !isLong
      ? fullText
      : fullText.slice(0, MAX_PREVIEW_CHARS) + " ...";

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow h-full">
      {imageUrl && (
        <div className="relative w-full aspect-[4/3] bg-gray-100">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 320px"
          />
        </div>
      )}

      <div className="p-5 flex-1 flex flex-col">
        <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h2>

        <p className="text-sm text-gray-500 mb-1 flex-1 whitespace-pre-wrap">
          {shownText}
        </p>

        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="text-xs font-semibold text-purple-600 hover:text-purple-700 mb-3 self-start"
          >
            {expanded ? "Tutup" : "Selengkapnya"}
          </button>
        )}

        {technology.length > 0 && (
          <div className="mb-4">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide block mb-2">
              Technology
            </span>
            <div className="flex flex-wrap gap-2">
              {technology.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-2 flex-wrap mt-auto">
          {detailHref && (
            <Link
              href={detailHref}
              className="flex-1 min-w-[120px] text-center bg-purple-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-purple-700 transition"
            >
              Detail Project
            </Link>
          )}
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[100px] text-center bg-gray-200 text-gray-800 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-300 transition"
            >
              Visit Project
            </a>
          )}
          {linkGithub && (
            <a
              href={linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[80px] text-center bg-gray-800 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-900 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

