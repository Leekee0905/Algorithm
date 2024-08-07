class MinHeap{
    constructor(){
        this.heap = [null];
    }
    
    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        while (parentIndex !== 0 && this.heap[parentIndex].cost > value.cost) {
            this._swap(parentIndex, currentIndex)

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    pop() {
        if (this.isEmpty()) return; 
        if (this.heap.length === 2) return this.heap.pop();

        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex  = 1;
        let leftIndex = 2;
        let rightIndex = 3;

        while ((this.heap[leftIndex] && this.heap[currentIndex].cost > this.heap[leftIndex].cost) || 
                (this.heap[rightIndex] && this.heap[currentIndex].cost > this.heap[rightIndex].cost)) {
            if (this.heap[leftIndex] === undefined) {
                this._swap(rightIndex, currentIndex)
            } else if (this.heap[rightIndex] === undefined) {
                this._swap(leftIndex, currentIndex)
            } else if (this.heap[leftIndex].cost > this.heap[rightIndex].cost) {
                this._swap(rightIndex, currentIndex)
            } else if (this.heap[leftIndex].cost <= this.heap[rightIndex].cost) {
                this._swap(leftIndex, currentIndex)
            }
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }

        return returnValue;
    }
    
    isEmpty() {
        return this.heap.length === 1;
    }
    
}

function dijkstra(road, N) {
    const heap = new MinHeap();
    heap.push({ node: 1, cost: 0 })

    const dist = [...Array(N + 1)].map(() => Infinity);
    dist[1] = 0;

    while (!heap.isEmpty()) {
        const { node: current, cost: currentCost } = heap.pop();

        for (const [src, dest, cost] of road) {
            const nextCost = cost + currentCost; 


            if (src === current && nextCost < dist[dest]) {
                dist[dest] = nextCost;
                heap.push({ node: dest, cost: nextCost });
            } else if (dest == current && nextCost < dist[src]) {
                dist[src] = nextCost;
                heap.push({ node: src, cost: nextCost });
            }
        }
    }

    return dist;
}
function solution(N, road, K) {
    const dist = dijkstra(road, N);
    console.log(dist)
    return dist.filter(x => x <= K).length;
}