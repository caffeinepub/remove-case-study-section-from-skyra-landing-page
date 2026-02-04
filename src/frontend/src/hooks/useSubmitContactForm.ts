import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface ContactFormData {
  contactType: string;
  name: string;
  organization: string;
  email: string;
  message: string;
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) {
        throw new Error('Actor not available');
      }
      await actor.submitContactForm(
        data.contactType,
        data.name,
        data.organization,
        data.email,
        data.message
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactSubmissions'] });
    }
  });
}
