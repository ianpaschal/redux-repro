import { Auth } from '@aws-amplify/auth';
import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { store } from 'src/store';
import { UserProfileDetailOutput } from 'src/__generated__/InternalApiTypes';

enum TagType {
  UserProfileDetail = 'UserProfileDetail',
}

export const internalApi = createApi({
  reducerPath: 'fooApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.foo.com',
    prepareHeaders: async (headers: Headers): Promise<Headers> => {
      await Auth.currentSession()
      // @ts-ignore @aws-amplify/auth doesn't seem to have correctly typed this method
        .then(({ idToken: { jwtToken } }) => {
          headers.set('authorization', `Bearer ${jwtToken}`);
        })
        .catch((error: string) => {
          if (error === 'No current user') {
            return; // Ignore this, requests will be sent as anonymous
          }
          // eslint-disable-next-line no-console
          console.error(error);
        });
      return headers;
    },
  }),
  tagTypes: Object.values(TagType),
  endpoints: (builder) => ({
    getUserProfile: builder.query<UserProfileDetailOutput, string>({
      query: (id) => `/user-profiles/${id || store.getState().user.userId}/`,
      providesTags: [TagType.UserProfileDetail],
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  likeWhateverMan,
  UhOhThisShouldntBeHere,
} = internalApi;
