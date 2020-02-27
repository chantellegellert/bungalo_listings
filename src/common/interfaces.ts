export interface IListingApiResult {
    count: number;
    next?: any;
    previous?: any;
    results: IListing[];
}

export interface IListing {
    id: any;
    slug: string;
    total_room_count: number;
    available_room_count: number;
    earliest_available_date: string;
    is_coming_soon: boolean;
    coming_soon_date?: any;
    amenities: IAmenity[];
    room_prices: number[];
    room_amenities: string[];
    headline: string;
    address: IAddress;
    market: IMarket;
    images: IImage[];
    showing_today: boolean;
}

export interface IAmenity {
    display_name: string;
    type: string;
}

export interface IAddress {
    city: string;
    neighborhood: string;
    latitude: number;
    longitude: number;
}

export interface IRentPremium {
    lease_length_in_months: number;
    premium_per_month: string;
}

export interface IIcons {
    small: string;
    medium: string;
    large: string;
    svg: string;
}

export interface IMarket {
    id: any;
    internal_name: string;
    display_name: string;
    slug: string;
    email: string;
    region: string;
    region_code: string;
    country: string;
    country_code: string;
    img: string;
    img_md: string;
    hide_room_details: boolean;
    rent_premiums: IRentPremium[];
    icons: IIcons;
}

export interface IImage {
    sm_url: string;
    md_url: string;
    lg_url: string;
    caption: string;
    order: number;
}