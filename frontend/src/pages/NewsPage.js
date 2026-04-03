import React, { useEffect, useState } from 'react';
import PageContainer from '../components/PageContainer';
import SectionHeader from '../components/SectionHeader';
import { api } from '../services/api';

export default function NewsPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => { api.getNews().then(setPosts).catch(() => setPosts([])); }, []);

  return (
    <section className="section-band light">
      <PageContainer>
        <SectionHeader label="League Updates" title="News & Announcements" subtitle="Published updates from league operations, fixtures, sponsors, and registration timelines." />
        <div className="card-grid">{posts.map((p) => <article key={p.id} className="card"><h3>{p.title}</h3><p>{p.content}</p><small>{p.publishedOnUtc ? new Date(p.publishedOnUtc).toLocaleDateString() : ''}</small></article>)}</div>
      </PageContainer>
    </section>
  );
}
