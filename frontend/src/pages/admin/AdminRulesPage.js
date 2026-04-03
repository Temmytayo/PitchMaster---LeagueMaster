import React from 'react';
import AdminCrudPage from '../../components/admin/AdminCrudPage';
import { api } from '../../services/api';

export default function AdminRulesPage() {
  return <AdminCrudPage title="League Rules" fields={[{ key: 'anchor', label: 'Anchor' }, { key: 'title', label: 'Title' }, { key: 'content', label: 'Content' }]} fetchItems={api.getRules} createItem={api.createRule} updateItem={api.updateRule} deleteItem={api.deleteRule} />;
}
