import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js"
const supabaseUrl = 'https://bmigxfztpnwisxhvqvmj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtaWd4Znp0cG53aXN4aHZxdm1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MjgzMDcsImV4cCI6MjA1NzQwNDMwN30.7yqcDx_QkJQDWmRtKFAS8KIztR7EuSt2bTo6d4dMZ6E"
const supabase = createClient(supabaseUrl, supabaseKey)


async function getBooks() {
  let { data: books, error } = await supabase
  .from('books')
  .select('*')
  let booksList = document.getElementById('books');

  for (let book of books) {
    booksList.innerHTML += `<tr><td>${book.tittle}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`;
  }
}

getBooks();