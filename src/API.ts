/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateRoomInput = {
  id?: string | null,
};

export type UpdateRoomInput = {
  id: string,
};

export type DeleteRoomInput = {
  id?: string | null,
};

export type CreateMessageInput = {
  id?: string | null,
  content: string,
  when: string,
  roomId?: string | null,
};

export type UpdateMessageInput = {
  id: string,
  content?: string | null,
  when?: string | null,
  roomId?: string | null,
};

export type DeleteMessageInput = {
  id?: string | null,
};

export type ModelRoomFilterInput = {
  id?: ModelIDFilterInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDFilterInput | null,
  content?: ModelStringFilterInput | null,
  when?: ModelStringFilterInput | null,
  roomId?: ModelIDFilterInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateRoomMutationVariables = {
  input: CreateRoomInput,
};

export type CreateRoomMutation = {
  createRoom:  {
    __typename: "Room",
    id: string,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateRoomMutationVariables = {
  input: UpdateRoomInput,
};

export type UpdateRoomMutation = {
  updateRoom:  {
    __typename: "Room",
    id: string,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteRoomMutationVariables = {
  input: DeleteRoomInput,
};

export type DeleteRoomMutation = {
  deleteRoom:  {
    __typename: "Room",
    id: string,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
};

export type CreateMessageMutation = {
  createMessage:  {
    __typename: "Message",
    id: string,
    content: string,
    when: string,
    roomId: string | null,
    room:  {
      __typename: "Room",
      id: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
};

export type UpdateMessageMutation = {
  updateMessage:  {
    __typename: "Message",
    id: string,
    content: string,
    when: string,
    roomId: string | null,
    room:  {
      __typename: "Room",
      id: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
};

export type DeleteMessageMutation = {
  deleteMessage:  {
    __typename: "Message",
    id: string,
    content: string,
    when: string,
    roomId: string | null,
    room:  {
      __typename: "Room",
      id: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
};

export type GetRoomQuery = {
  getRoom:  {
    __typename: "Room",
    id: string,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListRoomsQueryVariables = {
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoomsQuery = {
  listRooms:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage:  {
    __typename: "Message",
    id: string,
    content: string,
    when: string,
    roomId: string | null,
    room:  {
      __typename: "Room",
      id: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      when: string,
      roomId: string | null,
      room:  {
        __typename: "Room",
        id: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom:  {
    __typename: "Room",
    id: string,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom:  {
    __typename: "Room",
    id: string,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom:  {
    __typename: "Room",
    id: string,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        when: string,
        roomId: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage:  {
    __typename: "Message",
    id: string,
    content: string,
    when: string,
    roomId: string | null,
    room:  {
      __typename: "Room",
      id: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage:  {
    __typename: "Message",
    id: string,
    content: string,
    when: string,
    roomId: string | null,
    room:  {
      __typename: "Room",
      id: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage:  {
    __typename: "Message",
    id: string,
    content: string,
    when: string,
    roomId: string | null,
    room:  {
      __typename: "Room",
      id: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};
