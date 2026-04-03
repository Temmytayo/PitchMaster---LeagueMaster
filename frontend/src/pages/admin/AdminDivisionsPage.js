import React from 'react';
import AdminCrudPage from '../../components/admin/AdminCrudPage';
import { api } from '../../services/api';

export default function AdminDivisionsPage() {
  return <AdminCrudPage title="Divisions" fields={[{ key: 'name', label: 'Division Name' }, { key: 'seasonId', label: 'Season Id', type: 'number' }]} fetchItems={api.getDivisions} createItem={api.createDivision} updateItem={api.updateDivision} deleteItem={api.deleteDivision} />;
}
