import { z } from 'zod';

export const AbilitySchema = z.object({
  ability: z.object({
    name: z.string(),
    url: z.string(),
    is_hidden: z.boolean(),
    slot: z.number(),
  }),
});

export const SpeciesSchema = z.object({
  name: z.string(),
  url: z.string(),
});

export const SpritesSchema = z.object({
  back_default: z.string(),
  back_female: z.string(),
  back_shiny: z.string(),
  back_shiny_female: z.string(),
  front_default: z.string(),
  front_female: z.string(),
  front_shiny: z.string(),
  front_shiny_female: z.string(),
});

export const StatSchema = z.object({
  base_stat: z.number(),
  effort: z.number(),
  stat: z.object({
    name: z.string(),
    url: z.string(),
  }),
});

export const TypeSchema = z.object({
  slot: z.number(),
  type: z.object({
    name: z.string(),
    url: z.string(),
  }),
});

export const PokemonItemSchema = z.object({
  name: z.string(),
  url: z.string(),
  abilities: z.array(AbilitySchema),
  base_experience: z.number(),
  height: z.number(),
  id: z.number(),
  is_default: z.boolean(),
  location_area_encounters: z.string(),
  order: z.number(),
  species: SpeciesSchema,
  sprites: SpritesSchema,
  stats: z.array(StatSchema),
  types: z.array(TypeSchema),
  weight: z.number(),
});

export const PokemonResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(PokemonItemSchema),
});
