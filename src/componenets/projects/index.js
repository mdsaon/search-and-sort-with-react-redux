import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getProjects,
  searchProjects,
  sortProjects
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
  sortByProjectId = () => {
    this.props.sortProjects();
  };
  render() {
    const { projects } = this.props.projects;
    const renderProjects = projects.map(project => (
      <div className="list-items">
        <div>{project.project}</div>
        <div>{project.description}</div>
          <div><Moment format="DD.MM.YYYY">{project["start date"]}</Moment></div>
        <div>{project.category}</div>
        <div>{project.responsible}</div>
        <div>{project["savings amount"]}</div>
        <div>{project.currency !== "NULL" ? project.currency : ""}</div>
        <div>{project.complexity}</div>
      </div>
    ));
    return (
      <div className="projects-container">
        <h1>Hello Projects</h1>
        <form>
          Search: <input type="text" onChange={this.searchHandler} />
        </form>
        <br />
        <button onClick={this.sortByProjectId}>Sort</button>
        <div className="project-container__display">
          <div className="list-items-heading">
            <div>ID</div>
            <div>Description</div>
           <div>Start Date</div>
           <div>Category</div>
            <div>Responsible</div>
           <div>Saving Amount</div>
            <div>Currency</div>
            <div>Complexity</div>
          </div>
          {renderProjects}
        </div>
      </div>
    );
  }
}
Projects.propTypes = {
  getProjects: PropTypes.func.isRequired,
  searchProjects: PropTypes.func.isRequired,
  sortyProjects: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(
  mapStateToProps,
  { getProjects, searchProjects, sortProjects }
)(Projects);
