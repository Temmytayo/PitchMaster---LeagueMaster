import React from 'react';
import AdminCrudPage from '../../components/admin/AdminCrudPage';
import { api } from '../../services/api';

export default function AdminNewsPage() {
  return <AdminCrudPage title="News & Updates" fields={[{ key: 'title', label: 'Title' }, { key: 'content', label: 'Content' }]} fetchItems={api.getNews} createItem={api.createNews} updateItem={api.updateNews} deleteItem={api.deleteNews} />;
}
