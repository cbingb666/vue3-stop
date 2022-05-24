export const useLogin = <Form>() => {
  const emit = defineEmits<{
    (e: 'click-login', form: Form): void;
  }>();
  return { emit };
};
