import React from 'react';
import AdminCrudPage from '../../components/admin/AdminCrudPage';
import { api } from '../../services/api';

export default function AdminSiteContentPage() {
  return <AdminCrudPage title="Site Content" fields={[{ key: 'key', label: 'Key' }, { key: 'value', label: 'Value' }]} fetchItems={api.getSiteContent} createItem={api.upsertSiteContent} updateItem={(_, payload) => api.upsertSiteContent(payload)} deleteItem={api.deleteSiteContent} />;
}
