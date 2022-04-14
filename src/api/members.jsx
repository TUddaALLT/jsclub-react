import axios from "axios";

const getMember = async (profileId) => {
    try {
        const response = await axios.get('http://localhost:5500/members', {
            params: {
                slug: profileId
            }
        });

        return response.data.length ? response.data[0] : 404;
    } catch (error) {
        console.error(error);
        return error.response.status;
    }
}
const getAllMembers = async (onlyName = false) => {
    try {
        const response = await axios.get('http://localhost:5500/members');

        if (!onlyName) {
            return response.data;
        } else {
            return response.data.map(member => {
                const { id, name } = member;
                return { id, name };
            });
        }
    } catch (error) {
        console.error(error);
        return error.response.status;
    }
}

const getAllMembersPaginate = async (page, limit = 12) => {
    try {
        const response = await axios.get('http://localhost:5500/members', {
            params: {
                _page: page,
                _limit: limit
            }
        });

        return response.data;
    } catch (error) {
        console.error(error);
        return error.response.status;
    }
}

export { getMember ,getAllMembers, getAllMembersPaginate };