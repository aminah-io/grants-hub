import { NewGrantActions, NEW_GRANT_CREATED, NEW_GRANT_TX_STATUS } from '../actions/newGrant';

export interface NewGrant {
  id: number;
  ipfsHash: string;
  owner?: string;
}
export interface NewGrantState {
  grants: NewGrant[];
  txStatus: string | null;
}

const initialState: NewGrantState = {
  grants: [],
  txStatus: null,
};

export const newGrantReducer = (
  action: NewGrantActions,
  state: NewGrantState = initialState,
): NewGrantState => {
  switch (action.type) {
    case NEW_GRANT_CREATED: {
      return {
        ...state,
        grants: [
          ...state.grants,
          {
            id: action.id,
            ipfsHash: action.ipfsHash,
            owner: action.owner,
          },
        ],
      };
    }

    case NEW_GRANT_TX_STATUS: {
      return {
        ...state,
        txStatus: action.status,
      };
    }

    default: {
      return state;
    }
  }
};
