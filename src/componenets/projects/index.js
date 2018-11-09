import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getProjects,
  searchProjects,
  sortProjectsASC,
  sortProjectsDESC
} from "../../actions/projectsAction";
import Moment from "react-moment";
class Projects extends Component {
  componentDidMount() {
    this.props.getProjects();
  }
  searchHandler = e => {
    const value = e.target.value;
    this.props.searchProjects(value);
  };
  sortByProjectIdASC = () => {
    this.props.sortProjectsASC();
  };
  sortByProjectIdDESC = () => {
    this.props.sortProjectsDESC();
  };
  render() {
    const { projects } = this.props.projects;
    const renderProjects = projects.map(project => (
      <div className="list-items">
        <div>{project.project}</div>
        <div style={{ width: 300 }}>{project.description}</div>
        <div>
          <Moment format="DD.MM.YYYY">{project["start date"]}</Moment>
        </div>
        <div>{project.category}</div>
        <div>{project.responsible}</div>
        <div style={{ width: 200 }}>{project["savings amount"]}</div>
        <div>{project.currency !== "NULL" ? project.currency : ""}</div>
        <div>{project.complexity}</div>
      </div>
    ));
    return (
      <div className="projects-container">
        <div className="top-navigation-bar">
          <h3 align="left">All Projects</h3>
          <form>
            <input
              type="text"
              onChange={this.searchHandler}
              placeholder="Search by description..."
            />
          </form>
        </div>
        <div className="list-items-heading">
          <div>
            ID<i className="up" onClick={this.sortByProjectIdASC} />
            <i className="down" onClick={this.sortByProjectIdDESC} />
          </div>
          <div style={{ width: 300 }}>Description</div>
          <div>Start Date</div>
          <div>Category</div>
          <div>Responsible</div>
          <div style={{ width: 200 }}>Saving Amount</div>
          <div>Currency</div>
          <div>Complexity</div>
        </div>
        {renderProjects}
      </div>
    );
  }
}
Projects.propTypes = {
  getProjects: PropTypes.func.isRequired,
  searchProjects: PropTypes.func.isRequired,
  sortProjectsASC: PropTypes.func.isRequired,
  sortProjectsDESC: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(
  mapStateToProps,
  { getProjects, searchProjects, sortProjectsASC, sortProjectsDESC }
)(Projects);
