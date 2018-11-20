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
  state = { isToggleOn: true };
  componentDidMount() {
    this.props.getProjects();
  }
  //Searching Function
  searchHandler = e => {
    const value = e.target.value.toLowerCase();
    this.props.searchProjects(value);
  };
  //Button Toggling with Sorting
  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    this.state.isToggleOn
      ? this.sortByProjectIdASC()
      : this.sortByProjectIdDESC();
  };
  //Sort by Ascending
  sortByProjectIdASC = () => {
    this.props.sortProjectsASC();
  };
  //Sorty by Descending
  sortByProjectIdDESC = () => {
    this.props.sortProjectsDESC();
  };
  render() {
    const { projects } = this.props.projects;
    return (
      <div className="projects-container">
        <div className="top-navigation-bar">
          <h3 align="left">Projects Lists</h3>
          <form>
            <input
              type="text"
              onChange={this.searchHandler}
              placeholder="Search by description..."
            />
          </form>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? "SORTBYIDASC>>>" : "SORTBYIDDESC<<<"}
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Description</th>
              <th scope="col">Start Date</th>
              <th scope="col">Category</th>
              <th scope="col">Responsible</th>
              <th scope="col">Savings Amount</th>
              <th scope="col">Currency</th>
              <th scope="col">Complexity</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr>
                <td data-label="Id">{project.project}</td>
                <td data-label="Description">{project.description}</td>
                <td data-label="Start Date">
                  <Moment format="DD.MM.YYYY">{project["start date"]}</Moment>
                </td>
                <td data-label="Category">{project.category}</td>
                <td data-label="Responsible">{project.responsible}</td>
                <td data-label="Savings Amount">{project["savings amount"]}</td>
                <td data-label="Currency">
                  {project.currency !== "NULL" ? project.currency : ""}
                </td>
                <td data-label="Complexity">{project.complexity}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
