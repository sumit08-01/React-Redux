import { TVShowAPI } from "./api/tv-show";
import s from "./style.module.css";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetails } from "./components/TVShowDetails/TVShowDetails";
import { Logo } from "./components/Logo/Logo";
import logoImg from "./assets/images/logo.png";
import { TvShowList } from "./components/TvShowList/TvShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchpopulars() {
    try {
      const popularTVShowList = await TVShowAPI.fetchPopular();
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0]);
      }
    } catch (error) {
      alert("Popular show not found");
    }
  }

  async function fetchRecomendations(tvShowId) {
    try {
      const recommendationLisRespt = await TVShowAPI.fetchRecommendation(
        tvShowId
      );
      if (recommendationLisRespt.length > 0) {
        setRecommendationList(recommendationLisRespt.slice(0, 10));
      }
    } catch (error) {
      alert("Recommendation not found");
    }
  }

  async function searchTVShow(title) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch (error) {
      alert("Movie not found");
    }
  }

  useEffect(() => {
    fetchpopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecomendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  function updateCurrentTvShow(tvshow) {
    setCurrentTVShow(tvshow);
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}")  no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImg}
              name="Watowatch"
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={searchTVShow} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetails tvshow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTVShow && (
          <TvShowList
            onClickItem={updateCurrentTvShow}
            tvshowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
}

export default App;
