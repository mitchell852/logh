require 'spec_helper'

describe Season do

  it { should respond_to(:name) }
  its(:name) { should be_blank }

  it { should respond_to(:weeks) }
  its(:weeks) { should be_empty }

  context 'when season has no name' do
    subject(:season) { FactoryGirl.build(:season, name: '') }
    it { should_not be_valid }
  end

  context 'when season name is greater than 20 characters' do
    subject(:season) { FactoryGirl.build(:season, name: 'a' * 21) }
    it { should_not be_valid }
  end

end