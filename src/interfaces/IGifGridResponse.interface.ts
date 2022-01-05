export interface IGifGridResponse{
    id: string;
    title: string;
    images: Images;
}

interface Images {
    downsized: Image;
}

interface Image {
    height: string;
    size: string;
    url: string;
    width: string;
}