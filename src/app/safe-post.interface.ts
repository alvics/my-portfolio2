import { SafeHtml } from '@angular/platform-browser';

export interface SafePost {
  title: SafeHtml;
  content: SafeHtml;
  excerpt: SafeHtml;
  featured_image: SafeHtml;
  small: SafeHtml;
  medium: SafeHtml;
  large: SafeHtml;
  date: SafeHtml;
  author: SafeHtml;
}
