import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>Busca, Escoje, Compra fácil y rápido!</h1>
        <p>
        En nuestra webstore ponemos a disposición cientos de productos tecnológicos de fácil ubicación para ahorrarte tiempo. Un proceso de pago asistido de fácil comprensión para que tu experiencia de compra sea fácil y rápida. Además de ofrecerte novedades de productos cada semana y oportunidades de ofertas especiales de la semana o del mes.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Algo salio mal!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
