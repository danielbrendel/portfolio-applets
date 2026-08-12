class Sprite {
	constructor(asset, framecount, w, h, target = 'body') {
		this.spriteAsset = asset;
		this.spriteWidth = w;
		this.spriteHeight = h;
		this.spriteCurFrame = 0;
		this.spriteMaxFrame = framecount;
		
		const elTarget = document.querySelector(target);
		this.spriteEntity = this.spawnSprite(elTarget);
	}
	
	setPosition(x, y) {
		if (!this.isValid()) {
			return;
		}
		
		this.spriteEntity.style.top = `${y}px`;
		this.spriteEntity.style.left = `${x}px`;
	}

	setRotation(rot) {
		this.spriteEntity.style.rotate = `${rot}deg`;
	}

	setTransformOrigin(origin) {
		this.spriteEntity.style.transformOrigin = origin;
	}

	setPlacement(value) {
		this.spriteEntity.style.position = value;
	}
	
	getX() {
		if (!this.isValid()) {
			return -1;
		}
		
		return parseInt(this.spriteEntity.style.left.replace('px', ''));
	}
	
	getY() {
		if (!this.isValid()) {
			return -1;
		}
		
		return parseInt(this.spriteEntity.style.top.replace('px', ''));
	}

	getRotation() {
		if (this.spriteEntity.style.rotate === '') {
			return 0;
		}

		return parseInt(this.spriteEntity.style.rotate.replace('deg', ''));
	}

	getTransformOrigin() {
		return this.spriteEntity.style.transformOrigin;
	}

	getPlacement() {
		return this.spriteEntity.style.position;
	}

	setVisibility(flag) {
		if (flag) {
			this.spriteEntity.style.opacity = '1.0';
		} else {
			this.spriteEntity.style.opacity = '0.0';
		}
	}

	isVisible() {
		return parseInt(this.spriteEntity.style.opacity) == 1;
	}
	
	flip() {
		if (!this.isValid()) {
			return;
		}
		
		this.spriteEntity.style.transform = 'scaleX(-1)';
	}
	
	resetFlip() {
		if (!this.isValid()) {
			return;
		}
		
		this.spriteEntity.style.transform = 'unset';
	}
	
	setZIndex(value) {
		if (!this.isValid()) {
			return;
		}
		
		this.spriteEntity.style.zIndex = value;
	}

	getElement() {
		return this.spriteEntity;
	}
	
	isValid() {
		return (typeof this.spriteEntity !== 'undefined') && (this.spriteEntity !== null);
	}
	
	spawnSprite(target) {
		let el = document.createElement('div');
		
		el.style.position = 'fixed';
		el.style.zIndex = '1000';
		el.style.width = `${this.spriteWidth}px`;
		el.style.height = `${this.spriteHeight}px`;
		el.style.backgroundImage = `url('${this.spriteAsset}')`;
		el.style.backgroundPosition = '-64 0';
		target.appendChild(el);
		
		return el;
	}

	updateFrames() {
		if (!this.isValid()) {
			return;
		}
		
		this.spriteEntity.style.backgroundPosition = '-' + (this.spriteCurFrame * 32) + 'px 0';
		
		this.spriteCurFrame++;
		if (this.spriteCurFrame >= this.spriteMaxFrame) {
			this.spriteCurFrame = 0;
		}
	}

	destroy() {
		this.spriteEntity.remove();
	}
}