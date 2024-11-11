// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract Enum {
    enum Status {
    Pending,
    Shipped,
    Accepted,
    Rejected,
    Canceled }

   

    Status public status;


    function get() public view returns (Status) {
        return status;
    }

    function set(Status _status) public {
        status = _status;
    }

    function cancel() public {
        status = Status.Canceled;
    }

    function resset() public {
        delete status;
    }

}

contract VotingSystem {
     enum ProposalStatus {
        Created,
        Voting,
        Accepted,
        Rejected
    }

    // Struct to hold information about each proposal
    struct Proposal {
        string description;
        uint upVotes;
        uint downVotes;
        ProposalStatus status;
    }

     // Mapping to store proposals by ID
     mapping(uint => Proposal) public proposals;
     uint public proposalCount;

     function createProposal(string memory _description) public {
        proposalCount++;
        proposals[proposalCount] = Proposal ({
            description: _description,
            upVotes: 0,
            downVotes: 0,
            status: ProposalStatus.Created
        });
     }

     function startVoting(uint _proposalId) public {
        require(proposals[_proposalId].status == ProposalStatus.Created, "Proposal not in Created status");
        proposals[_proposalId].status = ProposalStatus.Voting;
     }


     function vote(uint _proposalID, bool support) public {
        require(proposals[_proposalID].status == ProposalStatus.Voting, "Voting is not open for this proposal");

        if (support) {
            proposals[_proposalID].upVotes++;
        } else {
            proposals[_proposalID].downVotes++;
        }
     }

     // Function to finalize the voting
    function finalizeVoting(uint _proposalId) public {
        require(proposals[_proposalId].status == ProposalStatus.Voting, "Voting not open for this proposal");

        if (proposals[_proposalId].upVotes > proposals[_proposalId].downVotes) {
            proposals[_proposalId].status = ProposalStatus.Accepted;
        } else {
            proposals[_proposalId].status = ProposalStatus.Rejected;
        }
    }

    function getStatus(uint _proposalId) public view returns (ProposalStatus) {
        return proposals[_proposalId].status;
    }
     function getProposal(uint proposalId) public view returns (
        string memory description,
        uint upVotes,
        uint downVotes,
        ProposalStatus status
    ) {
        Proposal storage proposal = proposals[proposalId];
        return (
            proposal.description,
            proposal.upVotes,
            proposal.downVotes,
            proposal.status
        );
    }

    function getVotingPercentage(uint _proposalId) public view returns (uint upVotePercentage, uint downVotePercentage) {
    Proposal storage proposal = proposals[_proposalId];

    uint totalVotes = proposal.upVotes + proposal.downVotes;

    // Ensure no division by zero
    if (totalVotes == 0) {
        return (0, 0); // No votes, so return 0% for both
    }

    // Calculate the percentages
    upVotePercentage = (proposal.upVotes * 100) / totalVotes;
    downVotePercentage = (proposal.downVotes * 100) / totalVotes;

    return (upVotePercentage, downVotePercentage);
}

}