type LastfmImage = {
    size: string;
    "#text": string;
};

type LastfmArtist = {
    "#text": string;
}

type LastfmAlbum = {
    "#text": string;
}

export type LastfmTrack = {
    artist: LastfmArtist;
    album: LastfmAlbum;
    image: LastfmImage[];
    name: string;
    url: string;
}

export type Album = {
    artist: string;
    title: string;
    slug: string;
    cover_image_url: string;
    year: number;
    rating: number;
    discogs_url: string;
    openscrobbler_url: string;
    review: string;
}

type PhotoExif = {
    make: string;
    model: string;
    focal_length: string;
    lens: string;
    aperture: string;
    shutter: string;
    iso: string;
    shot_at: string;
}

export type Photo = {
    id: number;
    title: string;
    image_url: string;
    thumbnail_url: string;
    uploaded_at: string;
    exif: PhotoExif;
}