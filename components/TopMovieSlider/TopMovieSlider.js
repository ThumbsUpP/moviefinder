import React, { useContext, useEffect } from 'react';
import './TopMovieSlider.scss';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import { StoreContext } from '@/contexts/StoreContext';
import { IsMobileContext } from '@/contexts/IsMobileContext';
import Slider from '@/components/Slider/Slider';
import { fetchTopMovie } from '@/store/actions';
import MovieCard from '@/components/MovieCard/MovieCard';
import { isFetched } from '@/helpers/helpers';
import Loader from '@/components/Loader/Loader';

const SLIDER_DEFAULT_SETTING = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: false,
};

const SLIDER_MOBILE_SETTING = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  autoplay: false,
  swipeToSlide: true,
};

const TopMovieSlider = () => {
  const { state, dispatch } = useContext(StoreContext);
  const isMobile = useContext(IsMobileContext);
  const { fetchStatus, results } = state.topMovies;

  useEffect(() => {
    dispatch(fetchTopMovie());
  }, []);

  return (
    <div className="top-movies">
      <ContentWrapper className="top-movies__content">
        <h1>Les 10 meilleurs films</h1>
        <Slider
          options={isMobile ? SLIDER_MOBILE_SETTING : SLIDER_DEFAULT_SETTING}
        >
          {isFetched(fetchStatus) ? (
            results.map(({ id, ...info }) => <MovieCard key={id} {...info} />)
          ) : (
            <Loader className="top-movies" />
          )}
        </Slider>
      </ContentWrapper>
    </div>
  );
};

export default TopMovieSlider;
