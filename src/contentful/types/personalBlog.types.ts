import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

// Hanya content type yang dipakai: Portofolio Section (content model di Contentful)
export interface TypePortofolioSectionFields {
  title: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
  projectLink?: EntryFieldTypes.Symbol;
  linkGithub?: EntryFieldTypes.Symbol;
  technology?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  description?: EntryFieldTypes.Text;
  slug?: EntryFieldTypes.Symbol;
  shortDesc?: EntryFieldTypes.Text;
  gallery?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  fitur?: EntryFieldTypes.RichText;
}

export type TypePortofolioSectionSkeleton = EntrySkeletonType<
  TypePortofolioSectionFields,
  "portofolioSection"
>;

export type TypePortofolioSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePortofolioSectionSkeleton, Modifiers, Locales>;

// Untuk resolve asset (image) dari Contentful
export interface IContentfulAsset {
  sys: {
    id: string;
  };
  fields: {
    file: {
      url: string;
      filename?: string;
      contentType?: string;
    };
  };
}
