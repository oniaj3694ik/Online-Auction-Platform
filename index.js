// 模拟在线拍卖平台数据
let itemsForSale = [
    { id: 1, name: "Painting", description: "Original artwork by renowned artist", startingPrice: 500 },
    { id: 2, name: "Antique Watch", description: "Vintage timepiece in excellent condition", startingPrice: 200 }
];

let auctions = [
    { id: 1, itemId: 1, currentBid: 0, endTime: new Date("2024-03-10T12:00:00Z") },
    { id: 2, itemId: 2, currentBid: 0, endTime: new Date("2024-03-15T12:00:00Z") }
];

let bids = [];

// 用户出价函数
function placeBid(userId, auctionId, amount) {
    // 检查拍卖是否存在
    const auction = auctions.find(auction => auction.id === auctionId);
    if (!auction) {
        console.log("Auction not found.");
        return;
    }

    // 检查拍卖是否已结束
    if (auction.endTime < new Date()) {
        console.log("Auction has already ended.");
        return;
    }

    // 检查出价是否高于当前最高出价
    if (amount <= auction.currentBid) {
        console.log("Bid must be higher than the current highest bid.");
        return;
    }

    // 更新拍卖信息和出价记录
    auction.currentBid = amount;
    bids.push({ userId, auctionId, amount });

    console.log(`Bid of $${amount} successfully placed for auction ${auctionId}.`);
}

// 示例用法
placeBid("user123", 1, 600);
placeBid("user456", 1, 700);
placeBid("user789", 2, 250);
