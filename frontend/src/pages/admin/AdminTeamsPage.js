import React from 'react';
import AdminCrudPage from '../../components/admin/AdminCrudPage';
import { api } from '../../services/api';

export default function AdminTeamsPage() {
  return <AdminCrudPage title="Teams" fields={[{ key: 'name', label: 'Team Name' }, { key: 'divisionId', label: 'Division Id', type: 'number' }]} fetchItems={api.getTeams} createItem={api.createTeam} updateItem={api.updateTeam} deleteItem={api.deleteTeam} />;
}
