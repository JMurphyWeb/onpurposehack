import React from 'react'
import { Thumbnail, Col, Row, Image } from 'react-bootstrap' // eslint-disable-line

import { Link } from 'react-router'
import { loadItems } from '../../actions/index.js'
import { connect } from 'react-redux'


class ProductComponent extends React.Component {
  constructor () {
    super()
    this.isLoading = this.isLoading.bind(this)
  }

  componentWillMount () {
    console.log('componentWillMount: ', this.props)
    this.props.loadItems()
  }

  isLoading () {
    return this.props.items.length > 0 ? '' : 'is-loading'
  }

  render () {
    return (
      <div>
        <div id='loading' className={'loading ' + this.isLoading()}>
          <div className={'img-container ' + this.isLoading()}>
            <img src='img/poly-leaf.png' className='loading-leaf' />
            <h3 className='loading-text'>loading items...</h3>
          </div>
        </div>
        <div className='container-flex'>
          {this.props.items.map((item, i) => {
            return (
              <div key={'item-' + i} className='col-flex'>
                <Link to={'/item/' + item.tweetId} >
                  <Thumbnail src={item.imgURLs[0]} >
                    <Image src={item.provider.profileImage} circle responsive />
                    {item.hashtags.map(hashtag => <h5 className='hashtags'>{'#' + hashtag}</h5>)}
                  </Thumbnail>
                </Link>
              </div>
             )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps. State: ', state)
  return { items: state.items }
}

export default connect(mapStateToProps, { loadItems })(ProductComponent)
