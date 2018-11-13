import axios from 'axios';
import {
    FETCH_PROJECTS_LIST, 
} from '../types';

import {
    getProjects,
} from '../projectsAction';

jest.mock('axios');

describe('projectsActions', () => {
  describe('getProjects', () => {
    const response = {};
    const dispatch = jest.fn();

    axios.get.mockReturnValue(Promise.resolve(response));

    beforeEach(async () => {
      dispatch.mockClear();
      await getProjects()(dispatch);
    });

    it('should call axios.get with "https://sievo-react-assignment.azurewebsites.net/api/data"', () => {
      expect(axios.get).toHaveBeenCalledWith('https://sievo-react-assignment.azurewebsites.net/api/data');
    });
    it('should call dispatch after get is resolved', () => {
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
    it('should call dispatch with correct data', () => {
      expect(dispatch).toHaveBeenLastCalledWith({
        type: FETCH_PROJECTS_LIST,
        payload: response.data,
      });
    });
});
});