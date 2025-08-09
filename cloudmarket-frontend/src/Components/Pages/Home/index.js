import React from 'react'
import Header from '../../Header'
import { algoliasearch } from 'algoliasearch'
import { ALGOLIA_APP_NAME, ALGOLIA_SEARCH_API_KEY } from '../../../config/api'
import { InstantSearch, SearchBox, Hits, Pagination, Configure } from 'react-instantsearch';
import ProductHit from './ProductHit';
import '../../../App.css'
const Home = () => {
    const searchClient = algoliasearch(ALGOLIA_APP_NAME, ALGOLIA_SEARCH_API_KEY);

    return (
        <div className="home-container">
      <Header isLoggedIn={false} />
      <div className="container py-4">
        <div className='algolia-wrapper'>
        <InstantSearch className="search-box" indexName="products" searchClient={searchClient}>
        
          {/* Search box */}
          <div className="mb-4">
            <SearchBox className="form-control" placeholder="Search products..." />
          </div>

          {/* Show only 12 products per page */}
          <Configure hitsPerPage={12} />

          {/* Products grid */}
          <div className="row">
            <Hits hitComponent={ProductHit} />
          </div>

          {/* Pagination */}
          <div className="mt-4 d-flex justify-content-center">
            <Pagination />
          </div>
        </InstantSearch>
        </div>
      </div>
    </div>

    )
}

export default Home