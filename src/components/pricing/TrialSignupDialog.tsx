
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/hooks/useLanguage';

interface TrialSignupDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const TrialSignupDialog: React.FC<TrialSignupDialogProps> = ({ open, onOpenChange }) => {
  const { t } = useLanguage();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would handle the form submission
    console.log('Trial signup submitted');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('pricing.trialDialog.title')}</DialogTitle>
          <DialogDescription>
            {t('pricing.trialDialog.description')}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                {t('common.name')}
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                {t('common.email')}
              </Label>
              <Input id="email" type="email" className="col-span-3" required />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">{t('pricing.trialDialog.submit')}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
