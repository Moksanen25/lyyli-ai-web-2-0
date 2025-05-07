
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Linkedin, Globe } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  linkedin?: string;
  website?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, imageUrl, linkedin, website }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
      <Avatar className="w-32 h-32 mb-4">
        {imageUrl ? (
          <AvatarImage src={imageUrl} alt={name} />
        ) : (
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        )}
      </Avatar>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-primary/70 mb-4">{role}</p>
      <p className="text-muted-foreground mb-4">{bio}</p>
      <div className="flex space-x-3">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
            <Linkedin size={20} />
          </a>
        )}
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
            <Globe size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

const TeamSection = () => {
  const { t } = useLanguage();
  
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Mikko Oksanen",
      role: t('about.team.mikko.role'),
      bio: t('about.team.mikko.bio'),
      imageUrl: "/placeholder.svg",
      linkedin: "https://www.linkedin.com/in/mikko-oksanen",
    },
    {
      name: "Veikko Laitinen",
      role: t('about.team.veikko.role'),
      bio: t('about.team.veikko.bio'),
      imageUrl: "/placeholder.svg",
      website: "https://veikkolaitinen.com",
    },
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t('about.team.title')}</h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 text-center">
        {t('about.team.description')}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
