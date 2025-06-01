import { z } from 'zod';
export declare const AbilitySchema: z.ZodObject<{
    ability: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
        is_hidden: z.ZodBoolean;
        slot: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url: string;
        is_hidden: boolean;
        slot: number;
    }, {
        name: string;
        url: string;
        is_hidden: boolean;
        slot: number;
    }>;
}, "strip", z.ZodTypeAny, {
    ability: {
        name: string;
        url: string;
        is_hidden: boolean;
        slot: number;
    };
}, {
    ability: {
        name: string;
        url: string;
        is_hidden: boolean;
        slot: number;
    };
}>;
export declare const SpeciesSchema: z.ZodObject<{
    name: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    url: string;
}, {
    name: string;
    url: string;
}>;
export declare const SpritesSchema: z.ZodObject<{
    back_default: z.ZodString;
    back_female: z.ZodString;
    back_shiny: z.ZodString;
    back_shiny_female: z.ZodString;
    front_default: z.ZodString;
    front_female: z.ZodString;
    front_shiny: z.ZodString;
    front_shiny_female: z.ZodString;
}, "strip", z.ZodTypeAny, {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}, {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}>;
export declare const StatSchema: z.ZodObject<{
    base_stat: z.ZodNumber;
    effort: z.ZodNumber;
    stat: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url: string;
    }, {
        name: string;
        url: string;
    }>;
}, "strip", z.ZodTypeAny, {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}, {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}>;
export declare const TypeSchema: z.ZodObject<{
    slot: z.ZodNumber;
    type: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url: string;
    }, {
        name: string;
        url: string;
    }>;
}, "strip", z.ZodTypeAny, {
    type: {
        name: string;
        url: string;
    };
    slot: number;
}, {
    type: {
        name: string;
        url: string;
    };
    slot: number;
}>;
export declare const PokemonItemSchema: z.ZodObject<{
    name: z.ZodString;
    url: z.ZodString;
    abilities: z.ZodArray<z.ZodObject<{
        ability: z.ZodObject<{
            name: z.ZodString;
            url: z.ZodString;
            is_hidden: z.ZodBoolean;
            slot: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            url: string;
            is_hidden: boolean;
            slot: number;
        }, {
            name: string;
            url: string;
            is_hidden: boolean;
            slot: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        ability: {
            name: string;
            url: string;
            is_hidden: boolean;
            slot: number;
        };
    }, {
        ability: {
            name: string;
            url: string;
            is_hidden: boolean;
            slot: number;
        };
    }>, "many">;
    base_experience: z.ZodNumber;
    height: z.ZodNumber;
    id: z.ZodNumber;
    is_default: z.ZodBoolean;
    location_area_encounters: z.ZodString;
    order: z.ZodNumber;
    species: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url: string;
    }, {
        name: string;
        url: string;
    }>;
    sprites: z.ZodObject<{
        back_default: z.ZodString;
        back_female: z.ZodString;
        back_shiny: z.ZodString;
        back_shiny_female: z.ZodString;
        front_default: z.ZodString;
        front_female: z.ZodString;
        front_shiny: z.ZodString;
        front_shiny_female: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
    }, {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
    }>;
    stats: z.ZodArray<z.ZodObject<{
        base_stat: z.ZodNumber;
        effort: z.ZodNumber;
        stat: z.ZodObject<{
            name: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            url: string;
        }, {
            name: string;
            url: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        base_stat: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        };
    }, {
        base_stat: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        };
    }>, "many">;
    types: z.ZodArray<z.ZodObject<{
        slot: z.ZodNumber;
        type: z.ZodObject<{
            name: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            url: string;
        }, {
            name: string;
            url: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: {
            name: string;
            url: string;
        };
        slot: number;
    }, {
        type: {
            name: string;
            url: string;
        };
        slot: number;
    }>, "many">;
    weight: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    url: string;
    abilities: {
        ability: {
            name: string;
            url: string;
            is_hidden: boolean;
            slot: number;
        };
    }[];
    base_experience: number;
    height: number;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    order: number;
    species: {
        name: string;
        url: string;
    };
    sprites: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
    };
    stats: {
        base_stat: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        };
    }[];
    types: {
        type: {
            name: string;
            url: string;
        };
        slot: number;
    }[];
    weight: number;
}, {
    name: string;
    url: string;
    abilities: {
        ability: {
            name: string;
            url: string;
            is_hidden: boolean;
            slot: number;
        };
    }[];
    base_experience: number;
    height: number;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    order: number;
    species: {
        name: string;
        url: string;
    };
    sprites: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
    };
    stats: {
        base_stat: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        };
    }[];
    types: {
        type: {
            name: string;
            url: string;
        };
        slot: number;
    }[];
    weight: number;
}>;
export declare const PokemonResponseSchema: z.ZodObject<{
    count: z.ZodNumber;
    next: z.ZodNullable<z.ZodString>;
    previous: z.ZodNullable<z.ZodString>;
    results: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
        abilities: z.ZodArray<z.ZodObject<{
            ability: z.ZodObject<{
                name: z.ZodString;
                url: z.ZodString;
                is_hidden: z.ZodBoolean;
                slot: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                url: string;
                is_hidden: boolean;
                slot: number;
            }, {
                name: string;
                url: string;
                is_hidden: boolean;
                slot: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            ability: {
                name: string;
                url: string;
                is_hidden: boolean;
                slot: number;
            };
        }, {
            ability: {
                name: string;
                url: string;
                is_hidden: boolean;
                slot: number;
            };
        }>, "many">;
        base_experience: z.ZodNumber;
        height: z.ZodNumber;
        id: z.ZodNumber;
        is_default: z.ZodBoolean;
        location_area_encounters: z.ZodString;
        order: z.ZodNumber;
        species: z.ZodObject<{
            name: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            url: string;
        }, {
            name: string;
            url: string;
        }>;
        sprites: z.ZodObject<{
            back_default: z.ZodString;
            back_female: z.ZodString;
            back_shiny: z.ZodString;
            back_shiny_female: z.ZodString;
            front_default: z.ZodString;
            front_female: z.ZodString;
            front_shiny: z.ZodString;
            front_shiny_female: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            back_default: string;
            back_female: string;
            back_shiny: string;
            back_shiny_female: string;
            front_default: string;
            front_female: string;
            front_shiny: string;
            front_shiny_female: string;
        }, {
            back_default: string;
            back_female: string;
            back_shiny: string;
            back_shiny_female: string;
            front_default: string;
            front_female: string;
            front_shiny: string;
            front_shiny_female: string;
        }>;
        stats: z.ZodArray<z.ZodObject<{
            base_stat: z.ZodNumber;
            effort: z.ZodNumber;
            stat: z.ZodObject<{
                name: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                url: string;
            }, {
                name: string;
                url: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            base_stat: number;
            effort: number;
            stat: {
                name: string;
                url: string;
            };
        }, {
            base_stat: number;
            effort: number;
            stat: {
                name: string;
                url: string;
            };
        }>, "many">;
        types: z.ZodArray<z.ZodObject<{
            slot: z.ZodNumber;
            type: z.ZodObject<{
                name: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                url: string;
            }, {
                name: string;
                url: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: {
                name: string;
                url: string;
            };
            slot: number;
        }, {
            type: {
                name: string;
                url: string;
            };
            slot: number;
        }>, "many">;
        weight: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url: string;
        abilities: {
            ability: {
                name: string;
                url: string;
                is_hidden: boolean;
                slot: number;
            };
        }[];
        base_experience: number;
        height: number;
        id: number;
        is_default: boolean;
        location_area_encounters: string;
        order: number;
        species: {
            name: string;
            url: string;
        };
        sprites: {
            back_default: string;
            back_female: string;
            back_shiny: string;
            back_shiny_female: string;
            front_default: string;
            front_female: string;
            front_shiny: string;
            front_shiny_female: string;
        };
        stats: {
            base_stat: number;
            effort: number;
            stat: {
                name: string;
                url: string;
            };
        }[];
        types: {
            type: {
                name: string;
                url: string;
            };
            slot: number;
        }[];
        weight: number;
    }, {
        name: string;
        url: string;
        abilities: {
            ability: {
                name: string;
                url: string;
                is_hidden: boolean;
                slot: number;
            };
        }[];
        base_experience: number;
        height: number;
        id: number;
        is_default: boolean;
        location_area_encounters: string;
        order: number;
        species: {
            name: string;
            url: string;
        };
        sprites: {
            back_default: string;
            back_female: string;
            back_shiny: string;
            back_shiny_female: string;
            front_default: string;
            front_female: string;
            front_shiny: string;
            front_shiny_female: string;
        };
        stats: {
            base_stat: number;
            effort: number;
            stat: {
                name: string;
                url: string;
            };
        }[];
        types: {
            type: {
                name: string;
                url: string;
            };
            slot: number;
        }[];
        weight: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
        abilities: {
            ability: {
                name: string;
                url: string;
                is_hidden: boolean;
                slot: number;
            };
        }[];
        base_experience: number;
        height: number;
        id: number;
        is_default: boolean;
        location_area_encounters: string;
        order: number;
        species: {
            name: string;
            url: string;
        };
        sprites: {
            back_default: string;
            back_female: string;
            back_shiny: string;
            back_shiny_female: string;
            front_default: string;
            front_female: string;
            front_shiny: string;
            front_shiny_female: string;
        };
        stats: {
            base_stat: number;
            effort: number;
            stat: {
                name: string;
                url: string;
            };
        }[];
        types: {
            type: {
                name: string;
                url: string;
            };
            slot: number;
        }[];
        weight: number;
    }[];
}, {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
        abilities: {
            ability: {
                name: string;
                url: string;
                is_hidden: boolean;
                slot: number;
            };
        }[];
        base_experience: number;
        height: number;
        id: number;
        is_default: boolean;
        location_area_encounters: string;
        order: number;
        species: {
            name: string;
            url: string;
        };
        sprites: {
            back_default: string;
            back_female: string;
            back_shiny: string;
            back_shiny_female: string;
            front_default: string;
            front_female: string;
            front_shiny: string;
            front_shiny_female: string;
        };
        stats: {
            base_stat: number;
            effort: number;
            stat: {
                name: string;
                url: string;
            };
        }[];
        types: {
            type: {
                name: string;
                url: string;
            };
            slot: number;
        }[];
        weight: number;
    }[];
}>;
