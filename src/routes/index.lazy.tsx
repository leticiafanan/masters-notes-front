import { ArticleCard } from '@/components/native/article-card';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="max-w-screen-md w-full mx-auto flex flex-col gap-4">
      <ArticleCard
        title="Meu primeiro artigo"
        subtitle="Olá! Sejam bem vindos(as) ao meu primeiro artigo!"
        tags={['javascript', 'react', 'nodejs', 'docker']}
        authorName="Leticia Fanan"
        createdAt={new Date('2024-10-23T20:13:15.646Z')}
      />

      <ArticleCard
        title="Meu primeiro artigo"
        subtitle="Olá! Sejam bem vindos(as) ao meu primeiro artigo!"
        tags={['javascript', 'react', 'nodejs', 'docker']}
        authorName="Leticia Fanan"
        createdAt={new Date('2024-10-23T20:13:15.646Z')}
      />

      <ArticleCard
        title="Meu primeiro artigo"
        subtitle="Olá! Sejam bem vindos(as) ao meu primeiro artigo!"
        tags={['javascript', 'react', 'nodejs', 'docker']}
        authorName="Leticia Fanan"
        createdAt={new Date('2024-10-23T20:13:15.646Z')}
      />

      <ArticleCard
        title="Meu primeiro artigo"
        subtitle="Olá! Sejam bem vindos(as) ao meu primeiro artigo!"
        tags={['javascript', 'react', 'nodejs', 'docker']}
        authorName="Leticia Fanan"
        createdAt={new Date('2024-10-23T20:13:15.646Z')}
      />

      <ArticleCard
        title="Meu primeiro artigo"
        subtitle="Olá! Sejam bem vindos(as) ao meu primeiro artigo!"
        tags={['javascript', 'react', 'nodejs', 'docker']}
        authorName="Leticia Fanan"
        createdAt={new Date('2024-10-23T20:13:15.646Z')}
      />

      <ArticleCard
        title="Meu primeiro artigo"
        subtitle="Olá! Sejam bem vindos(as) ao meu primeiro artigo!"
        tags={['javascript', 'react', 'nodejs', 'docker']}
        authorName="Leticia Fanan"
        createdAt={new Date('2024-10-23T20:13:15.646Z')}
      />

      <ArticleCard
        title="Meu primeiro artigo"
        subtitle="Olá! Sejam bem vindos(as) ao meu primeiro artigo!"
        tags={['javascript', 'react', 'nodejs', 'docker']}
        authorName="Leticia Fanan"
        createdAt={new Date('2024-10-23T20:13:15.646Z')}
      />
    </section>
  );
}
