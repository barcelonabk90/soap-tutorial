// helpers/soapHelper.ts

export const convertUsersToSOAPMessage = (users: any[]) => {
    let xml = '<?xml version="1.0"?>';
    xml += '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">';
    xml += '<soap:Body>';
    xml += '<UsersResponse>';
    users.forEach(user => {
        xml += `<User>
            <UserId>${user.userId}</UserId>
            <Name>${user.name}</Name>
            <Age>${user.age}</Age>
        </User>`;
    });
    xml += '</UsersResponse>';
    xml += '</soap:Body>';
    xml += '</soap:Envelope>';
    return xml;
};
