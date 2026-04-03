import React from 'react';
import AdminCrudPage from '../../components/admin/AdminCrudPage';
import { api } from '../../services/api';

export default function AdminSeasonsPage() {
  return <AdminCrudPage title="Seasons" fields={[{ key: 'name', label: 'Season Name' }, { key: 'isActive', label: 'Is Active' }]} fetchItems={api.getSeasons} createItem={api.createSeason} updateItem={api.updateSeason} deleteItem={api.deleteSeason} />;
}
