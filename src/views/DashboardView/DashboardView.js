/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addFilm } from '../../redux/modules/addFilm'
import classes from './DashboardView.scss'

import Header from '../../components/Header/Header'

// We can use Flow (http://flowtype.org/) to type our component's props
// and state. For convenience we've included both regular propTypes and
// Flow types, but if you want to try just using Flow you'll want to
// disable the eslint rule `react/prop-types`.
// NOTE: You can run `npm run flow:check` to check for any errors in your
// code, or `npm i -g flow-bin` to have access to the binary globally.
// Sorry Windows users :(.
type Props = {
  films: Array,
  addFilm: Function
};

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class DashboardView extends React.Component<void, Props, void> {
  static propTypes = {
    films: PropTypes.array.isRequired,
    addFilm: PropTypes.func.isRequired
  };

  render () {
    return (
        <Header/>
    )
  }
}

const mapStateToProps = (state) => ({
  films: state.films
})
export default connect((mapStateToProps), {
  addFilm
})(DashboardView)
