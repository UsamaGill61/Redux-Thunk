import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchposts } from "../Actions/Actions";
import UserHeader from "../UserHeader/UserHeader";

export class PostList extends Component {
  componentDidMount() {
    this.props.fetchposts();
  }
  render() {
    console.log(this.props.posts);

    return (
      <div>
        {this.props.posts.map((e) => {
          return (
            <div
              className="container mb-4"
              key={e.id}
              style={{ boxShadow: " 4px grey" ,border: "1px solid grey"}}
            >
              <div className="row">
                <div className="col-2 text-center my-auto  ">
                  <i className="fas fa-user-alt px-auto "></i>
                </div>
                <div className="col-10 bg-light">
                  <h5 style={{ fontWeight: "bolder", color: "red" }}>
                    {e.title}
                  </h5>
                  <p>{e.body}</p>
                  <UserHeader userId={e.userId} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchposts })(PostList);
