
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSafeTranslation } from '@/utils/safeTranslation';

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ tags, selectedTag, onSelectTag }) => {
  const { t } = useLanguage();
  const { safeT } = useSafeTranslation();
  
  return (
    <div className="mb-8 overflow-x-auto scrollbar-hide">
      <div className="flex space-x-2 pb-2">
        <Button
          variant={selectedTag === null ? "default" : "outline"}
          size="sm"
          onClick={() => onSelectTag(null)}
          className="whitespace-nowrap"
        >
          {t('blog.allTags')}
        </Button>
        
        {tags.map((tag) => (
          <Button
            key={tag}
            variant={selectedTag === tag ? "default" : "outline"}
            size="sm"
            onClick={() => onSelectTag(tag)}
            className="whitespace-nowrap"
          >
            {safeT(`blog.tags.${tag.toLowerCase().replace(/\s+/g, '')}`, { fallback: tag })}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
