import { ImageProps } from "@/types/Image/ImageProps.types";

export interface BlogPostContentProps {
    category: string;
    title: string;
    subtitle: string;
    date: string;
    readTime: string;
    content: string;
    contentWithImage: {
        image: ImageProps;
        content: string;
    };
}