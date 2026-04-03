import React from 'react';
import AdminCrudPage from '../../components/admin/AdminCrudPage';
import { api } from '../../services/api';

export default function AdminSponsorsPage() {
  return <AdminCrudPage title="Sponsors" fields={[{ key: 'name', label: 'Name' }, { key: 'tier', label: 'Tier' }, { key: 'contactEmail', label: 'Contact Email' }]} fetchItems={api.getSponsors} createItem={api.createSponsor} updateItem={api.updateSponsor} deleteItem={api.deleteSponsor} />;
}
