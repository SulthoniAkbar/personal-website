import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeExperienceSectionFields {
  jobTitle: EntryFieldTypes.Symbol;
  company: EntryFieldTypes.Symbol;
  dateTime: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
}

export type TypeExperienceSectionSkeleton = EntrySkeletonType<
  TypeExperienceSectionFields,
  "experienceSection"
>;
export type TypeExperienceSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeExperienceSectionSkeleton, Modifiers, Locales>;

export interface TypeHeroSectionFields {
  name: EntryFieldTypes.Symbol;
  jobTitle: EntryFieldTypes.Symbol;
  profile: EntryFieldTypes.AssetLink;
  about?: EntryFieldTypes.Text;
  file?: EntryFieldTypes.AssetLink;
}

export type TypeHeroSectionSkeleton = EntrySkeletonType<
  TypeHeroSectionFields,
  "heroSection"
>;
export type TypeHeroSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeHeroSectionSkeleton, Modifiers, Locales>;

export interface TypePortofolioSectionFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  technologies?: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
  projectLink?: EntryFieldTypes.Symbol;
}

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

export type TypePortofolioSectionSkeleton = EntrySkeletonType<
  TypePortofolioSectionFields,
  "portofolioSection"
>;
export type TypePortofolioSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePortofolioSectionSkeleton, Modifiers, Locales>;

export interface TypeSkillsSectionFields {
  skillName: EntryFieldTypes.Symbol;
  icon: EntryFieldTypes.AssetLink;
}

export type TypeSkillsSectionSkeleton = EntrySkeletonType<
  TypeSkillsSectionFields,
  "skillsSection"
>;
export type TypeSkillsSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeSkillsSectionSkeleton, Modifiers, Locales>;

export interface TypeTestimonialsSectionFields {
  clientName: EntryFieldTypes.Symbol;
  clientPhoto?: EntryFieldTypes.AssetLink;
  testimonial: EntryFieldTypes.Text;
}

export type TypeTestimonialsSectionSkeleton = EntrySkeletonType<
  TypeTestimonialsSectionFields,
  "testimonialsSection"
>;
export type TypeTestimonialsSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeTestimonialsSectionSkeleton, Modifiers, Locales>;
