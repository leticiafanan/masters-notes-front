import { Badge } from '../ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

type ArticleCardProps = {
  title: string;
  tags: string[];
  subtitle: string;
  authorName: string;
  createdAt: Date;
};

export function ArticleCard({
  authorName,
  title,
  tags,
  subtitle,
  createdAt,
}: ArticleCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{subtitle}</CardContent>
      <CardDescription className="space-x-3 mt-4 p-3">
        {tags.map((tag, index) => (
          <Badge key={`${tag}-${index}`} variant="secondary">
            {tag}
          </Badge>
        ))}
      </CardDescription>
      <CardFooter className="font-semibold">
        {authorName},{' '}
        {new Intl.DateTimeFormat('pt-BR', {
          dateStyle: 'medium',
          timeZone: 'America/Sao_Paulo',
        }).format(createdAt)}
      </CardFooter>
    </Card>
  );
}
