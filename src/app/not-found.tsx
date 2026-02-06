import Error from "@/components/modules/error/error";

export const NotFoundPage = () => {
  return (
    <Error
      title="Página não encontrada"
      description="Não encontramos a página que você tentou acessar. Volte para o início ou explore outra rota."
    />
  );
};

export default NotFoundPage;
