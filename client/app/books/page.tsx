// app/admin/books/page.tsx
import { BookManager } from "@/components/admin/books/book-manager";

export default function BooksPage() {
  return (
    <div className="p-6">
      <BookManager />
    </div>
  );
}